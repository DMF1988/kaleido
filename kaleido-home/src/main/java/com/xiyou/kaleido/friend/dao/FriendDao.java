package com.xiyou.kaleido.friend.dao;

import com.xiyou.kaleido.friend.entity.Friend;
import org.springframework.stereotype.Repository;

/**
 * Created by chad.ding on 2017/2/8.
 */

@Repository("friendDao")
public interface FriendDao {

    long addFriend(Friend friend);
}
