package www.xiyou.com.common;

import lombok.Getter;

/**
 * Created by chad.ding on 2017/1/9.
 */
public class ResponseModel<T> {

    @Getter
    private int code;
    @Getter
    private String msg;
    @Getter
    private T data;

    public ResponseModel(T data, int code, String msg){
        this.data = data;
        this.code = code;
        this.msg = msg;
    }

    public ResponseModel(T data){
        this(data, 200, null);
    }

    public ResponseModel(int code, String msg){
        this(null, code, msg);
    }

}
