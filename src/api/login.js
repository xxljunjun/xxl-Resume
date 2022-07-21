import request from './request';


// 请求天气
export function goToRegister(data) {
	return request({
		url: `/users/regist`,
		method: 'POST',
        data
	})
}

export function gotoIndex() {
	return request({
		url: `/search`,
		method: 'GET',
	})
}