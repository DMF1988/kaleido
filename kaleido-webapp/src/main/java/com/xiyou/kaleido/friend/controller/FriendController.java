package com.xiyou.kaleido.friend.controller;

import com.xiyou.kaleido.common.annotation.KaleidoController;
import com.xiyou.kaleido.common.model.ResponseModel;
import com.xiyou.kaleido.user.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created by DMF on 2017/2/1.
 */

@Controller
@KaleidoController
@RequestMapping(value = "/api/friend")
public class FriendController {

    @RequestMapping(value="/add", method= RequestMethod.GET)
    public ResponseEntity<ResponseModel> addFriend(@RequestParam String userId, HttpServletRequest request){

        HttpSession session = request.getSession();
        User user = (User)session.getAttribute("LOGIN_USER");


        Cookie[] cookies = request.getCookies();

        return new ResponseEntity<ResponseModel>(new ResponseModel("success"), HttpStatus.OK);
    }
}
