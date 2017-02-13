package com.xiyou.kaleido.common.http;

import com.xiyou.kaleido.common.exception.KaleidoException;
import lombok.Getter;

/**
 * Created by chad.ding on 2017/2/13.
 */
public enum KaleidoStatus {

    SESSION_TIMEOUT(-1, "session timeout");

    @Getter
    private int status;
    @Getter
    private String message;

    KaleidoStatus(int status, String message){
        this.status = status;
        this.message = message;
    }
}