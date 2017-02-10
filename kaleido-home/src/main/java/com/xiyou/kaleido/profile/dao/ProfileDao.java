package com.xiyou.kaleido.profile.dao;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.xiyou.kaleido.profile.entity.Profile;

import java.util.List;

/**
 * Created by DMF on 2017/1/13.
 */

@Repository("profileDao")
public interface ProfileDao {
    Profile getProfileByUserId(@Param("userId") String userId);
    long addProfile(@Param("profile") Profile profile);
    long updateByUserId(@Param("profile") Profile profile);
    List queryUser(@Param("keyword") String keyword, @Param("pageable") Pageable pageable);
    int countUser(@Param("keyword") String keyword);
}
