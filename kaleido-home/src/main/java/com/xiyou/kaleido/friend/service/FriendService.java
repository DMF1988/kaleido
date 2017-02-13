package com.xiyou.kaleido.friend.service;

import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.friend.entity.Friend;
import com.xiyou.kaleido.profile.entity.Profile;

import java.util.List;

/**
 * Created by chad.ding on 2017/2/8.
 */
public interface FriendService {
    void addFriend(String owner, String friend) throws KaleidoException;

    Friend getFriend(String owner, String friend) throws KaleidoException;

    List<Profile> getFriendList(Friend friend) throws KaleidoException;
}
