package www.xiyou.com.profile.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import www.xiyou.com.profile.entity.Profile;

/**
 * Created by DMF on 2017/1/13.
 */

@Repository("profileDao")
public interface ProfileDao {

    Profile getProfileByUserId(@Param("userId") String userId);
    long addProfile(@Param("profile") Profile profile);
}
