package www.xiyou.com.user.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * Created by chad.ding on 2017/1/6.
 */

@Setter
@Getter
@Data
public class User {
    private long id;
    private String userId;
    private String loginName;
    private String loginPassword;
    private Date lastLoginTime;
    private Date createTime;
    private Date lastUpdateTime;
    private int deleted;
}
