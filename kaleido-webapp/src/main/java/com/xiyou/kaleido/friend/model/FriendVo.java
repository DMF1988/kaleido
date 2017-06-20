package com.xiyou.kaleido.friend.model;

import lombok.Data;

/**
 * Created by DMF on 2017/2/1.
 */

@Data
public class FriendVo {
    private String userId;
    private String portrait;
    private String userName;
    private char gender;
    private String country;
    private String province;
    private String city;
    private String mark;
    private int status;
    private int deleted;
}
