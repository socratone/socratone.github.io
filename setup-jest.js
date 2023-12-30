/**
 * 아래 에러를 해결하기 위해서 jest.config.mjs의 setupFilesAfterEnv에 이 파일을 설정한다.
 * ReferenceError: TextEncoder is not defined
 * https://github.com/inrupt/solid-client-authn-js/issues/1676#issuecomment-917016646
 */

import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
