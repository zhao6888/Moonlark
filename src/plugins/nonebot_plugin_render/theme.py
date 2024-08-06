import json
from pathlib import Path
import aiofiles
from nonebot_plugin_localstore import get_data_dir
from .config import config

data_dir = get_data_dir("nonebot_plugin_render")


async def get_themes() -> dict[str, str]:
    async with aiofiles.open(Path(__file__).parent.joinpath("themes.json"), encoding="utf-8") as f:
        return json.loads(await f.read())


async def get_user_theme(user_id: str) -> str:
    file = data_dir.joinpath(user_id)
    if file.exists():
        async with aiofiles.open(file, "r", encoding="UTF-8") as f:
            theme = await f.read()
    if theme not in await get_themes() or not file.exists():
        theme = config.render_default_theme
    return theme


async def set_theme(user_id: str, theme: str) -> None:
    async with open(data_dir.joinpath(user_id), "w", encoding="utf-8") as f:
        await f.write(theme)


async def get_theme_file(theme: str) -> str:
    return (await get_themes())[theme]
