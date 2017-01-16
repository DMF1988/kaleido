package com.xiyou.kaleido.meta.dao;

import com.xiyou.kaleido.meta.entity.Meta;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by DMF on 2017/1/15.
 */

@Repository(value="metaDao")
public interface MetaDao {
    List<Meta> getByParent(@Param("parent") String parent);
    Meta getMetaDetail(@Param("parent") String parent, @Param("value") String value);
}
