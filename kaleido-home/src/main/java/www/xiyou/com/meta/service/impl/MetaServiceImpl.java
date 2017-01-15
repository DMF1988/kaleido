package www.xiyou.com.meta.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import www.xiyou.com.common.util.KaleidoException;
import www.xiyou.com.meta.dao.MetaDao;
import www.xiyou.com.meta.entity.Meta;
import www.xiyou.com.meta.exception.MetaError;
import www.xiyou.com.meta.service.MetaService;

import java.util.List;

/**
 * Created by DMF on 2017/1/15.
 */
@Service(value="metaService")
public class MetaServiceImpl implements MetaService {

    @Autowired
    private MetaDao metaDao;

    public List getByParent(String parent) throws KaleidoException {

        List<Meta> list = metaDao.getByParent(parent);

        if(list == null){
            throw new KaleidoException(MetaError.PARENT_NOT_EXIST, parent);
        }
        return list;
    }

    public Meta getMetaDetail(String parent, String value) throws KaleidoException {

        Meta meta = metaDao.getMetaDetail(parent, value);

        if(meta == null){
            throw new KaleidoException(MetaError.META_NOT_EXIST, value);
        }

        return meta;
    }
}
