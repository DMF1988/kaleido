package com.xiyou.kaleido.friend.entity;

import lombok.Getter;

/**
 * Created by chad.ding on 2017/2/15.
 */
public enum FriendStatus {

    PENDING(0),
    ACTIVE(1),
    BLACK_LIST(2);

    @Getter
    private int status;

    FriendStatus(int status){
        this.status = status;
    }
}
