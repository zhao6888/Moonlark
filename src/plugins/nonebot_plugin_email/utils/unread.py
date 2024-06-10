from typing import AsyncGenerator
from sqlalchemy import ScalarResult, select
from nonebot_plugin_orm import get_scoped_session

from .data import get_email_data

from ..types import EmailData

from ..models import EmailUser


async def get_unread_email_id(user_id: str) -> ScalarResult[int]:
    session = get_scoped_session()
    return await session.scalars(
        select(EmailUser.email_id)
        .where(EmailUser.user_id == user_id, EmailUser.is_read.is_(False)))


async def get_unread_email(user_id: str) -> AsyncGenerator[EmailData, None]:
    for email_id in await get_unread_email_id(user_id):
        yield await get_email_data(email_id, user_id)


async def get_unread_email_count(user_id: str) -> int:
    return len([item async for item in get_unread_email(user_id)])
