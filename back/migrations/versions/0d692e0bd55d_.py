"""empty message

Revision ID: 0d692e0bd55d
Revises: 
Create Date: 2018-11-11 14:29:45.689104

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0d692e0bd55d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cat',
    sa.Column('id', sa.Text(), nullable=False),
    sa.Column('url', sa.Text(), nullable=False),
    sa.Column('score', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('cat')
    # ### end Alembic commands ###