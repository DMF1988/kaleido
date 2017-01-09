package www.xiyou.com.user.exception;

import lombok.Getter;
import www.xiyou.com.common.util.ErrorCode;

/**
 * Created by chad.ding on 2017/1/9.
 */
public enum UserError implements ErrorCode{

    USER_NOT_EXIST(1001, "用户%s不存在");

    @Getter
    private int code;
    @Getter
    private String msg;

    UserError(int code, String msg){
        this.code = code;
        this.msg = msg;
    }

}
