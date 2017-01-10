package www.xiyou.com.account.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import www.xiyou.com.account.model.Account;
import www.xiyou.com.common.ResponseModel;
import www.xiyou.com.common.annotation.KaleidoController;
import www.xiyou.com.common.util.KaleidoException;
import www.xiyou.com.user.entity.User;
import www.xiyou.com.user.service.UserService;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by chad.ding on 2017/1/10.
 */

@Controller
@KaleidoController
@RequestMapping(value="/account")
public class AccountController {

    @Autowired
    private UserService userService;

    @RequestMapping(value="/login", method= RequestMethod.POST, consumes = "application/json")
    public ResponseEntity<ResponseModel> login(@RequestBody Account account, HttpServletRequest rquest, HttpServletResponse response) throws KaleidoException {

        Cookie cookie = new Cookie("TOKEN", "12345678");
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        User user = userService.login(account.getLoginName(), account.getLoginPassword());
        return new ResponseEntity<ResponseModel>(new ResponseModel(user, 200, "success"), HttpStatus.OK);
    }

    @RequestMapping(value="/signup", method=RequestMethod.POST, consumes = "application/json")
    public ResponseEntity<ResponseModel> signup(@RequestBody Account account, HttpServletRequest request) throws KaleidoException {

        String userId = userService.addUser(account.getLoginName(), account.getLoginPassword(), account.getUserName());

        return new ResponseEntity<ResponseModel>(new ResponseModel(userId, 200, "success"), HttpStatus.OK);
    }
}
