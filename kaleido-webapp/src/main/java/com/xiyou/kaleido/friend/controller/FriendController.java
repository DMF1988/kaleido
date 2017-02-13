package com.xiyou.kaleido.friend.controller;

import com.xiyou.kaleido.common.annotation.KaleidoController;
import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.common.model.ResponseModel;
import com.xiyou.kaleido.friend.entity.Friend;
import com.xiyou.kaleido.friend.exception.FriendError;
import com.xiyou.kaleido.friend.service.FriendService;
import com.xiyou.kaleido.profile.entity.Profile;
import com.xiyou.kaleido.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by DMF on 2017/2/1.
 */

@Controller
@KaleidoController
@RequestMapping(value = "/api/friend")
public class FriendController {

    @Autowired
    private FriendService friendService;

    @RequestMapping(value = "/list", method=RequestMethod.GET)
    public ResponseEntity<ResponseModel> listFriend(HttpServletRequest request) throws KaleidoException{

        HttpSession session = request.getSession();
        User user = (User)session.getAttribute("LOGIN_USER");

        Friend friendModel = new Friend();
        friendModel.setOwner(user.getUserId());

        friendModel.setStatus(0);
        List<Profile> pendingList = friendService.getFriendList(friendModel);

        friendModel.setStatus(1);
        List<Profile> activeList = friendService.getFriendList(friendModel);

        friendModel.setStatus(2);
        List<Profile> blackList = friendService.getFriendList(friendModel);

        List<Profile> friendList = new ArrayList<Profile>();
        friendList.addAll(pendingList);
        friendList.addAll(activeList);
        friendList.addAll(blackList);

        return new ResponseEntity<ResponseModel>(new ResponseModel(friendList, "success"), HttpStatus.OK);
    }

    @RequestMapping(value="/add", method = RequestMethod.GET)
    public ResponseEntity<ResponseModel> addFriend(@RequestParam("userId") String userId, HttpServletRequest request) throws KaleidoException{

        HttpSession session = request.getSession();
        User user = (User)session.getAttribute("LOGIN_USER");

        if(userId.equals(user.getUserId())){
            throw new KaleidoException(FriendError.INVALID_FRIEND);
        }

        friendService.addFriend(user.getUserId(), userId);

        return new ResponseEntity<ResponseModel>(new ResponseModel("success"), HttpStatus.OK);
    }
}
