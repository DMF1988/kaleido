package www.xiyou.com.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import www.xiyou.com.profile.entity.Profile;
import www.xiyou.com.profile.service.ProfileService;
import www.xiyou.com.user.model.UserVo;
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
@RequestMapping(value="/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ProfileService profileService;

    @RequestMapping(value="/get", method=RequestMethod.GET)
    public ResponseEntity<ResponseModel> getUserInfo(@RequestParam String userId, HttpServletRequest request) throws KaleidoException {

        User user = userService.getUserInfo(userId);
        Profile profile = profileService.getProfile(userId);

        UserVo vo = new UserVo();

        vo.setUserId(userId);
        String userName;
        if(profile.getUserName() == null){
            userName = "user_"+userId.substring(8);
        }else{
            userName = profile.getUserName();
        }
        vo.setLoginName(user.getLoginName());
        vo.setUserName(userName);
        vo.setLastLoginTime(user.getLastLoginTime());
        vo.setPortrait(profile.getPortrait());

        return new ResponseEntity<ResponseModel>(new ResponseModel(vo), HttpStatus.OK);

    }

    @RequestMapping(value="/login", method= RequestMethod.POST)
    public ResponseEntity<ResponseModel> login(@RequestParam String loginName, @RequestParam String loginPassword, HttpServletResponse response) throws KaleidoException {

        Cookie cookie = new Cookie("TOKEN", "12345678");
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        User user = userService.login(loginName, loginPassword);


        return new ResponseEntity<ResponseModel>(new ResponseModel(user.getUserId()), HttpStatus.OK);
    }

    @RequestMapping(value="/signup", method=RequestMethod.POST)
    public ResponseEntity<ResponseModel> signup(@RequestParam String loginName, @RequestParam String loginPassword, HttpServletRequest request) throws KaleidoException {

        String userId = userService.addUser(loginName, loginPassword);

        return new ResponseEntity<ResponseModel>(new ResponseModel(userId), HttpStatus.OK);
    }
}
