package com.xiyou.kaleido.friend.exception;

import com.xiyou.kaleido.common.exception.ErrorCode;
import lombok.Getter;

/**
 * Created by chad.ding on 2017/2/13.
 */
public enum FriendError implements ErrorCode {

    FRIEND_NOT_EXIST(5001, "好友不存在"),
    INVALID_FRIEND(5002, "无效的好友人选"),
    INVALID_OPERATION(5003, "无效的操作");

    @Getter
    private int code;
    @Getter
    private String msg;

    FriendError(int code, String msg){
        this.code = code;
        this.msg = msg;
    }
}
