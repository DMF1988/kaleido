package com.xiyou.kaleido.friend.entity;

import lombok.Data;
import java.util.Date;

/**
 * Created by chad.ding on 2017/2/8.
 */

@Data
public class Friend {
    private long id;
    private String owner;
    private String objective;
    private int status;
    private String mark;
    private Date createTime;
    private Date lastUpdateTime;
    private int deleted;
}
