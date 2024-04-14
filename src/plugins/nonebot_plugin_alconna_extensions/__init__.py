from nonebot import get_plugin_config, require
from nonebot.plugin import PluginMetadata
from .config import Config

__plugin_meta__ = PluginMetadata(
    name="nonebot_plugin_alconna_extensions",
    description="",
    usage="",
    config=Config,
)

config = get_plugin_config(Config)

require("nonebot_plugin_alconna")

from nonebot_plugin_alconna.extension import load_from_path

EXTENSIONS = [
    "src.plugins.nonebot_plugin_alconna_extensions.global_extensions:ReplyExtension",
    "src.plugins.nonebot_plugin_alconna_extensions.global_extensions:UnmatchedExtension"
]
for extension in EXTENSIONS:
    load_from_path(extension)
