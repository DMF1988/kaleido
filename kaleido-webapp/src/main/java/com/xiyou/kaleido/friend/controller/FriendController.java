package com.xiyou.kaleido.friend.controller;

import com.xiyou.kaleido.common.annotation.KaleidoController;
import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.common.model.ResponseModel;
import com.xiyou.kaleido.friend.entity.Friend;
import com.xiyou.kaleido.friend.entity.FriendStatus;
import com.xiyou.kaleido.friend.exception.FriendError;
import com.xiyou.kaleido.friend.model.FriendVo;
import com.xiyou.kaleido.friend.service.FriendService;
import com.xiyou.kaleido.profile.entity.Profile;
import com.xiyou.kaleido.profile.service.ProfileService;
import com.xiyou.kaleido.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
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

    @Autowired
    private ProfileService profileService;


    @RequestMapping(value="/update", method=RequestMethod.POST)
    public ResponseEntity<ResponseModel> updateFriend(@RequestBody FriendVo vo, HttpServletRequest request){

        HttpSession session = request.getSession();
        User userInfo = (User)session.getAttribute("LOGIN_USER");

        Friend friend = new Friend();
        friend.setOwner(userInfo.getUserId());
        friend.setFriend(vo.getUserId());
        friend.setStatus(vo.getStatus());
        friend.setMark(vo.getMark());
        friend.setDeleted(vo.getDeleted());

        return new ResponseEntity<ResponseModel>(new ResponseModel("success"), HttpStatus.OK);
    }

    @RequestMapping(value = "/list", method=RequestMethod.GET)
    public ResponseEntity<ResponseModel> listFriend(HttpServletRequest request) throws KaleidoException{

        HttpSession session = request.getSession();
        User user = (User)session.getAttribute("LOGIN_USER");



        Friend friendModel = new Friend();
        friendModel.setOwner(user.getUserId());

        //待审批好友
        friendModel.setStatus(0);
        List<Friend> pendingList = friendService.getFriendList(friendModel);
        //已添加好友
        friendModel.setStatus(1);
        List<Friend> activeList = friendService.getFriendList(friendModel);
        //黑名单好友
        friendModel.setStatus(2);
        List<Friend> blackList = friendService.getFriendList(friendModel);

        List<Friend> friends = new ArrayList<Friend>();
        friends.addAll(pendingList);
        friends.addAll(activeList);
        friends.addAll(blackList);

        List<FriendVo> friendList = convertFriend(friends);
        return new ResponseEntity<ResponseModel>(new ResponseModel(friendList, "success"), HttpStatus.OK);
    }

    @RequestMapping(value="/add", method = RequestMethod.GET)
    public ResponseEntity<ResponseModel> addFriend(@RequestParam("userId") String userId, HttpServletRequest request) throws KaleidoException{

        HttpSession session = request.getSession();
        User user = (User)session.getAttribute("LOGIN_USER");

        if(userId.equals(user.getUserId())){
            throw new KaleidoException(FriendError.INVALID_FRIEND);
        }

        friendService.addFriend(userId, user.getUserId());

        return new ResponseEntity<ResponseModel>(new ResponseModel("success"), HttpStatus.OK);
    }

    private List<FriendVo> convertFriend(List<Friend> friendList) throws KaleidoException {

        if(friendList == null || friendList.size() == 0){
            return null;
        }

        List<FriendVo> result = new ArrayList<FriendVo>();

        for(Friend friend : friendList){
            Profile profile = profileService.getProfile(friend.getFriend());

            FriendVo vo = new FriendVo();
            vo.setUserId(profile.getUserId());
            vo.setPortrait(profile.getPortrait());
            vo.setGender(profile.getGender());
            vo.setMark(friend.getMark());
            vo.setUserName(profile.getUserName());
            vo.setCountry(profile.getCountry());
            vo.setProvince(profile.getProvince());
            vo.setCity(profile.getCity());
            vo.setStatus(friend.getStatus());

            result.add(vo);
        }

        return result;
    }
}
