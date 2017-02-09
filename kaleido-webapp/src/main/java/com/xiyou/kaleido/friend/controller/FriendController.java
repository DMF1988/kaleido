package com.xiyou.kaleido.friend.controller;

import com.xiyou.kaleido.common.model.ResponseModel;
import com.xiyou.kaleido.friend.model.FriendVo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by DMF on 2017/2/1.
 */

@RequestMapping(value = "/friend")
public class FriendController {

    public ResponseEntity<ResponseModel> addFriend(@RequestBody FriendVo friend){

        return new ResponseEntity<ResponseModel>(new ResponseModel("success"), HttpStatus.OK);
    }
}
