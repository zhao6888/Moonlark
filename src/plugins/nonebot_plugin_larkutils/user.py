import traceback
from typing import Any
from nonebot.adapters import Event
from nonebot.params import Depends
from nonebot.log import logger

def _get_user_id(event: Event) -> str:
    try:
        return event.get_user_id()
    except Exception:
        logger.error(f"获取用户 ID 失败: {traceback.format_exc()}")
        return "-1"

def get_user_id() -> Any:
    return Depends(_get_user_id)