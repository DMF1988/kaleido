package com.xiyou.kaleido.friend.dao;

import com.xiyou.kaleido.friend.entity.Friend;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by chad.ding on 2017/2/8.
 */

@Repository("friendDao")
public interface FriendDao {

    long addFriend(Friend friend);
    List<Friend> getFriends(@Param("friend") Friend friend);
    void updateFriend(@Param("friend") Friend friend);

}
