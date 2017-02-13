package com.xiyou.kaleido.friend.service.impl;

import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.friend.dao.FriendDao;
import com.xiyou.kaleido.friend.entity.Friend;
import com.xiyou.kaleido.friend.exception.FriendError;
import com.xiyou.kaleido.friend.service.FriendService;
import com.xiyou.kaleido.profile.entity.Profile;
import com.xiyou.kaleido.profile.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by chad.ding on 2017/2/8.
 */
@Service("friendService")
public class FriendServiceImpl implements FriendService {

    @Autowired
    private FriendDao friendDao;

    @Autowired
    private ProfileService profileService;

    @Transactional
    public void addFriend(String owner, String friend) throws KaleidoException{

        Friend friendModel = getFriend(owner, friend);

        if(friendModel == null){
            friendModel = new Friend();
            friendModel.setOwner(owner);
            friendModel.setFriend(friend);
            friendModel.setCreateTime(new Date());

            friendDao.addFriend(friendModel);
        }else{
            friendModel.setStatus(0);
            friendDao.updateFriend(friendModel);
        }


    }

    public List<Profile> getFriendList(Friend friend) throws KaleidoException{

        List<Friend> list = friendDao.getFriend(friend);
        List<Profile> result = new ArrayList<Profile>();

        for(Friend item : list){
            Profile profile = profileService.getProfile(item.getFriend());
            result.add(profile);
        }

        return result;
    }

    public Friend getFriend(String owner, String friend) throws KaleidoException{

        Friend param = new Friend();

        param.setOwner(owner);
        param.setFriend(friend);

        List<Friend> list = friendDao.getFriend(param);

        if(list == null){
            throw new KaleidoException(FriendError.FRIEND_NOT_EXIST);
        }

        return list.get(0);
    }
}
