package com.xiyou.kaleido.user.controller;

import com.xiyou.kaleido.common.model.ResponseModel;
import com.xiyou.kaleido.profile.service.ProfileService;
import com.xiyou.kaleido.user.entity.User;
import com.xiyou.kaleido.user.exception.UserError;
import com.xiyou.kaleido.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.xiyou.kaleido.profile.entity.Profile;
import com.xiyou.kaleido.user.model.UserVo;
import com.xiyou.kaleido.common.annotation.KaleidoController;
import com.xiyou.kaleido.common.exception.KaleidoException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.UUID;

/**
 * Created by chad.ding on 2017/1/10.
 */

@Controller
@KaleidoController
@RequestMapping(value="/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ProfileService profileService;

    @RequestMapping(value="/updatePassword", method=RequestMethod.GET)
    public ResponseEntity<ResponseModel> updatePassword(@RequestParam String loginName, @RequestParam String oldPassword, @RequestParam String newPassword) throws KaleidoException {

        User user = userService.login(loginName, oldPassword);

        if(user == null){
            throw new KaleidoException(UserError.USER_NOT_EXIST);
        }

        user.setLoginPassword(newPassword);
        user.setLastUpdateTime(new Date());

        userService.updatePassword(user);

        return new ResponseEntity<ResponseModel>(new ResponseModel("success"), HttpStatus.OK);
    }

    @RequestMapping(value="/updateEmail", method=RequestMethod.GET)
    public ResponseEntity<ResponseModel> updateEmail(@RequestParam String oldEmail, @RequestParam String newEmail, @RequestParam String password) throws KaleidoException{

        User user = userService.login(oldEmail, password);

        if(user == null){
            throw new KaleidoException(UserError.USER_NOT_EXIST);
        }

        user.setLoginName(newEmail);
        user.setLastLoginTime(new Date());

        userService.updateEmail(user);

        return new ResponseEntity<ResponseModel>(new ResponseModel("success"), HttpStatus.OK);
    }

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
        vo.setGender(profile.getGender());
        vo.setLoginName(user.getLoginName());
        vo.setUserName(userName);
        vo.setLastLoginTime(user.getLastLoginTime());
        vo.setPortrait(profile.getPortrait());

        return new ResponseEntity<ResponseModel>(new ResponseModel(vo), HttpStatus.OK);
    }

    @RequestMapping(value="/login", method= RequestMethod.GET)
    public ResponseEntity<ResponseModel> login(@RequestParam @Validated String loginName, @RequestParam @Validated String loginPassword, HttpServletRequest request, HttpServletResponse response) throws KaleidoException {

        User user = userService.login(loginName, loginPassword);
        HttpSession session = request.getSession();
        session.setAttribute("LOGIN_USER", user);

        UUID token = UUID.randomUUID();
        Cookie cookie = new Cookie("TOKEN", token.toString());
        cookie.setPath("/");
        response.addCookie(cookie);

        session.setAttribute("TOKEN", token);

        return new ResponseEntity<ResponseModel>(new ResponseModel(user.getUserId()), HttpStatus.OK);
    }

    @RequestMapping(value="/signup", method=RequestMethod.GET)
    public ResponseEntity<ResponseModel> signup(@RequestParam String loginName, @RequestParam String loginPassword, HttpServletRequest request) throws KaleidoException {

        String userId = userService.addUser(loginName, loginPassword);

        return new ResponseEntity<ResponseModel>(new ResponseModel(userId), HttpStatus.OK);
    }
}
