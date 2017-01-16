package com.xiyou.kaleido.user.model;

import com.sun.istack.internal.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * Created by chad.ding on 2017/1/10.
 */

@Setter
@Getter
public class UserVo {
    private String loginName;
    private String loginPassword;
    private String userId;
    private String userName;
    private String portrait;
    private Date lastLoginTime;
}
