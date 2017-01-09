package www.xiyou.com.common.util;

import lombok.Getter;
import www.xiyou.com.common.util.ErrorCode;

/**
 * Created by chad.ding on 2017/1/9.
 */
public class KaleidoException extends Exception{

    @Getter
    private int code;

    public KaleidoException(){
        super();
    }

    public KaleidoException(String message){
        super(message);
    }

    public KaleidoException(ErrorCode error, String... params){
        super(String.format(error.getMsg(), params));
        this.code = error.getCode();
    }

}
