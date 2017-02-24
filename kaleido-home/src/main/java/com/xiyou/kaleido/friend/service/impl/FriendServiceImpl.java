package com.xiyou.kaleido.friend.service.impl;

import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.friend.dao.FriendDao;
import com.xiyou.kaleido.friend.entity.Friend;
import com.xiyou.kaleido.friend.exception.FriendError;
import com.xiyou.kaleido.friend.service.FriendService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

/**
 * Created by chad.ding on 2017/2/8.
 */
@Service("friendService")
public class FriendServiceImpl implements FriendService {

    private static Logger logger = LoggerFactory.getLogger(FriendServiceImpl.class);

    @Autowired
    private FriendDao friendDao;

    @Transactional
    public void updateFriend(Friend friend) throws KaleidoException {
        friend.setLastUpdateTime(new Date());

        friendDao.updateFriend(friend);
    }

    @Transactional
    public void addFriend(String owner, String objective) throws KaleidoException{

        Friend friendModel;
        try{
            friendModel = getFriend(owner, objective);
            friendModel.setStatus(0);
            friendDao.updateFriend(friendModel);
        }catch(KaleidoException e){

            logger.info("apply new friend.");
            friendModel = new Friend();
            friendModel.setOwner(owner);
            friendModel.setObjective(objective);
            friendModel.setStatus(0);
            friendModel.setCreateTime(new Date());
            friendModel.setLastUpdateTime(new Date());
            friendModel.setDeleted(0);
        }
    }

    public List<Friend> getFriendList(Friend friend) throws KaleidoException{

        List<Friend> list = friendDao.getFriends(friend);
        return list;
    }


    public Friend getFriend(String owner, String objective) throws KaleidoException{

        Friend param = new Friend();

        param.setOwner(owner);
        param.setObjective(objective);

        List<Friend> list = friendDao.getFriends(param);

        if(list == null || list.size() == 0){
            throw new KaleidoException(FriendError.FRIEND_NOT_EXIST);
        }

        return list.get(0);
    }
}
