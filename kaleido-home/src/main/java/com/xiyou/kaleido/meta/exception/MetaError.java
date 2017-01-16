package com.xiyou.kaleido.meta.exception;

import com.xiyou.kaleido.common.util.ErrorCode;
import lombok.Getter;

/**
 * Created by DMF on 2017/1/15.
 */
public enum MetaError implements ErrorCode {

    META_NOT_EXIST(3001, "元数据%s不存在"),
    PARENT_NOT_EXIST(3001, "数据类型%s不存在");

    @Getter
    private int code;
    @Getter
    private String msg;

    MetaError(int code, String msg){
        this.code = code;
        this.msg = msg;
    }
}
