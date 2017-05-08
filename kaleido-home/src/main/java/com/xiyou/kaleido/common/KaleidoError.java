package com.xiyou.kaleido.common;

import com.xiyou.kaleido.common.exception.ErrorCode;
import com.xiyou.kaleido.common.exception.KaleidoException;
import lombok.Getter;

/**
 * Created by chad.ding on 2017/5/8.
 */
public enum KaleidoError implements ErrorCode {

    SESSION_TIMEOUT(1001, "登录超时");

    @Getter
    private int code;
    @Getter
    private String msg;

    KaleidoError(int code, String msg){
        this.code = code;
        this.msg = msg;
    }
}
