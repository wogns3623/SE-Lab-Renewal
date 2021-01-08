const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

const { select } = require("db/index");
const { pbkdf2Async } = require("useful/password.js");
const config = require("config.json").crypto;

module.exports = () => {
  passport.serializeUser((user, done) => {
    // 여기에서 쿠키를 생성?
    // done에 두번째 인자에 넣는 값이 쿠키에 저장되고,
    // 이후 아래 deserializeUser의 첫 번째 인자로 들어감
    // 모든 유저 정보를 저장할 필요는 없으므로, 내가 원하는 정보만을 저장할 수도 있음
    console.log("Serialize User", user.u_id);
    // 유저 id를 저장하는게 보안상 문제가 될 수 있는가?

    done(null, user.u_id);
  });

  passport.deserializeUser(async (id, done) => {
    // 쿠키를 가져와 유저 정보를 읽음
    // 만약 쿠키에 특정 정보만을 포함시켰다면 여기서 db등을 참고해 완전한 정보로 복구시키면 됨
    try {
      console.log("Deserialize User", id);
      const user = await select("SELECT * FROM User WHERE u_id = ?", [id]);

      return done(null, user[0]);
    } catch (error) {
      console.error("error on find user info", error);

      return done(error);
    }
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "id", // form field name
        passwordField: "pw",
        session: true,
        passReqToCallback: false,
      },
      async (id, pw, done) => {
        // 여기서 유저 id와 pw를 비교함
        // db내부의 데이터와 비교

        try {
          console.log("Finding user", id);
          const user = await select("SELECT * FROM User WHERE u_id = ?", [id]);

          if (!user.length) {
            console.log("Failed to find user", id);

            return done(null, false, {
              message: "아이디가 존재하지 않거나 비밀번호가 틀렸습니다.",
            });
          }

          let pwCrypt = await pbkdf2Async(
            pw,
            user[0].u_pw_salt,
            config.iterations,
            config.keylen,
            config.digest
          );

          if (pwCrypt != user[0].u_pw) {
            console.log("Password not match", id);

            return done(null, false, {
              message: "아이디가 존재하지 않거나 비밀번호가 틀렸습니다.",
            });
          } else {
            console.log("Find user", id);
            console.log(user[0]);

            return done(null, user[0]);
          }
        } catch (error) {
          console.error("Error on find user", id, error);

          return done(error);
        }
      }
    )
  );
};
