package com.xiyou.kaleido.friend.entity;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by chad.ding on 2017/2/8.
 */

@Setter
@Getter
public class Friend {
    private long id;
    private String owner;
    private String friend;
    private String status;
}
