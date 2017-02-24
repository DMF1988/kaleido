package com.xiyou.kaleido.friend.entity;

import lombok.Getter;

/**
 * Created by chad.ding on 2017/2/15.
 */
public enum FriendStatus {

    PENDING(0),     //申请中
    ACTIVE(1),      //已加为好友
    BLACK_LIST(2),  //黑名单
    REJECT(3),      //拒绝好友申请
    DELETE(4);      //删除好友

    @Getter
    private int status;

    FriendStatus(int status){
        this.status = status;
    }
}
