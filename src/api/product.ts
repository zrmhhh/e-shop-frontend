import request from '@/libs/request';

export function QueryProductList (data: any) {
    return request({
        url: '/product',
        method: 'get',
        params: data
    });
}