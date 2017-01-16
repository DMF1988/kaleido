package com.xiyou.kaleido.profile.exception;

/**
 * Created by DMF on 2017/1/13.
 */

import com.xiyou.kaleido.common.util.ErrorCode;
import lombok.Getter;

public enum ProfileError implements ErrorCode {

    PROFILE_NOT_EXIST(2001, "用户%s信息不存在");


    @Getter
    private int code;
    @Getter
    private String msg;

    ProfileError(int code, String msg){
        this.code = code;
        this.msg = msg;
    }
}
