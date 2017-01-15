package www.xiyou.com.profile.exception;

/**
 * Created by DMF on 2017/1/13.
 */

import lombok.Getter;
import www.xiyou.com.common.util.ErrorCode;

public enum ProfileError implements ErrorCode{

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
