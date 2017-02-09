package com.xiyou.kaleido.meta.service;

import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.meta.entity.Meta;

import java.util.List;

/**
 * Created by DMF on 2017/1/15.
 */
public interface MetaService {
    List getByParent(String parent) throws KaleidoException;
    Meta getMetaDetail(String parent, String value) throws KaleidoException;
}
