package www.xiyou.com.meta.service;

import www.xiyou.com.common.util.KaleidoException;
import www.xiyou.com.meta.entity.Meta;

import java.util.List;

/**
 * Created by DMF on 2017/1/15.
 */
public interface MetaService {
    List getByParent(String parent) throws KaleidoException;
    Meta getMetaDetail(String parent, String value) throws KaleidoException;
}
