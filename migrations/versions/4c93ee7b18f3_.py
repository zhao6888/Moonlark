"""empty message

迁移 ID: 4c93ee7b18f3
父迁移: c33242e66c95
创建时间: 2024-07-07 13:35:41.470261

"""
from __future__ import annotations

from collections.abc import Sequence

from alembic import op
import sqlalchemy as sa


revision: str = '4c93ee7b18f3'
down_revision: str | Sequence[str] | None = 'c33242e66c95'
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade(name: str = "") -> None:
    if name:
        return
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('nonebot_plugin_pawcoin_exchange_exchanged',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('pawcoin', sa.Integer(), nullable=False),
    sa.Column('vimcoin', sa.Float(), nullable=False),
    sa.PrimaryKeyConstraint('user_id', name=op.f('pk_nonebot_plugin_pawcoin_exchange_exchanged')),
    info={'bind_key': 'nonebot_plugin_pawcoin_exchange'}
    )
    with op.batch_alter_table('nonebot_plugin_quick_math_quickmathuser', schema=None) as batch_op:
        batch_op.add_column(sa.Column('max_point_this_cycle', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('use_count_this_cycle', sa.Integer(), nullable=False))

    # ### end Alembic commands ###


def downgrade(name: str = "") -> None:
    if name:
        return
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('nonebot_plugin_quick_math_quickmathuser', schema=None) as batch_op:
        batch_op.drop_column('use_count_this_cycle')
        batch_op.drop_column('max_point_this_cycle')

    op.drop_table('nonebot_plugin_pawcoin_exchange_exchanged')
    # ### end Alembic commands ###
