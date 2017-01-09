package www.xiyou.com.profile.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * Created by chad.ding on 2017/1/6.
 */

@Setter
@Getter
public class Profile {
    private String userId;
    private String loginName;
    private String userName;
    private String realName;
    private String phoneNum;
    private Date createTime;
}
