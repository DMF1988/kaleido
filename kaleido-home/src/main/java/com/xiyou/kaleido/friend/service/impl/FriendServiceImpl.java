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

    @Transactional
    public void updateFriend(Friend friend) throws KaleidoException {
        friend.setLastUpdateTime(new Date());

        friendDao.updateFriend(friend);
    }

    @Transactional
    public void addFriend(String owner, String objective) throws KaleidoException{

        Friend friendModel = null;
        try{
            friendModel = getFriend(owner, objective);
        }catch(KaleidoException e){

        }

        if(friendModel == null){
            friendModel = new Friend();
            friendModel.setOwner(owner);
            friendModel.setObjective(objective);
            friendModel.setStatus(0);
            friendModel.setCreateTime(new Date());
            friendModel.setLastUpdateTime(new Date());
            friendModel.setDeleted(0);

            friendDao.addFriend(friendModel);
        }else{
            friendModel.setStatus(0);
            friendDao.updateFriend(friendModel);
        }

    }

    public List<Friend> getFriendList(Friend friend) throws KaleidoException{

        List<Friend> list = friendDao.getFriend(friend);
        return list;
    }


    public Friend getFriend(String owner, String objective) throws KaleidoException{

        Friend param = new Friend();

        param.setOwner(owner);
        param.setObjective(objective);

        List<Friend> list = friendDao.getFriend(param);

        if(list == null || list.size() == 0){
            throw new KaleidoException(FriendError.FRIEND_NOT_EXIST);
        }

        return list.get(0);
    }
}
