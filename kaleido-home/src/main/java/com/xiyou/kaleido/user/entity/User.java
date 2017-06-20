package com.xiyou.kaleido.user.entity;

import lombok.Data;
import java.util.Date;

/**
 * Created by chad.ding on 2017/1/6.
 */

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
