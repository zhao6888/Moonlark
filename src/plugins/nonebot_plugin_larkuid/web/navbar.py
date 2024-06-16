from pathlib import Path
from typing import Optional

from fastapi import Depends, Request
from fastapi.responses import PlainTextResponse
from nonebot import get_app
from nonebot_plugin_htmlrender import template_to_html

from ...nonebot_plugin_larkuser.models import UserData
from ..lang import lang
from ..session import get_user_data


@get_app().get("/script/navbar.js")
async def _(_request: Request, user: Optional[UserData] = get_user_data()) -> PlainTextResponse:
    user_id = user.user_id if user else "-1"
    nickname = user.nickname if user else None
    return PlainTextResponse(
        await template_to_html(
            Path(__file__).parent.parent.joinpath("templates").as_posix(),
            "navbar.js.jinja",
            title=await lang.text("navbar.title", user_id),
            nickname=nickname,
            login=await lang.text("navbar.login", user_id),
            status=await lang.text("navbar.status", user_id),
            github=await lang.text("navbar.github", user_id),
        ),
        headers={"Cache-Control": "no-store, no-cache, must-revalidate, max-age=0"}
        media_type="application/javascript",
    )
