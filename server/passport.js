const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

export default () => {
  passport.serializeUser((user, done) => {
    // 여기에서 쿠키를 생성?
    // done에 두번째 인자에 넣는 값이 쿠키에 저장되고,
    // 이후 아래 deserializeUser의 첫 번째 인자로 들어감
    // 모든 유저 정보를 저장할 필요는 없으므로, 내가 원하는 정보만을 저장할 수도 있음

    // Todo: 필요한 정보만 반환하기

    console.log("serializeUser", user);
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    // 쿠키를 가져와 유저 정보를 읽음
    // 만약 쿠키에 특정 정보만을 포함시켰다면 여기서 db등을 참고해 완전한 정보로 복구시키면 됨

    // Todo: 일부 정보를 가지고 db를 조회해 완전한 데이터 반환하기

    console.log("deserializeUser", user);
    done(null, user);
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "id", // form field name
        passwordField: "pw",
        session: true,
        passReqToCallback: false,
      },
      (username, password, done) => {
        // 여기서 유저 id와 pw를 비교함
        // db내부의 데이터와 비교
        // Todo: db를 조회해 입력받은 값을 비교한 후 알맞은 done 객체 리턴
        // Users.findOne({ id: id }, (findError, user) => {
        //   if (findError) return done(findError); // 서버 에러 처리
        //   if (!user)
        //     return done(null, false, { message: "존재하지 않는 아이디입니다" }); // 임의 에러 처리
        //   return user.comparePassword(password, (passError, isMatch) => {
        //     if (!isMatch) {
        //       return done(null, false, { message: "비밀번호가 틀렸습니다" }); // 임의 에러 처리
        //     }
        //     return done(null, user); // 검증 성공
        //   });
        // });
      }
    )
  );
};
