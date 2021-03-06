"""empty message

Revision ID: e0fff5a936f5
Revises: 465ecacb9189
Create Date: 2020-03-28 11:11:28.740139

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'e0fff5a936f5'
down_revision = '465ecacb9189'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_logins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('login_date', sa.DateTime(timezone=True), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_column('users', 'last_login')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('last_login', postgresql.TIMESTAMP(timezone=True), autoincrement=False, nullable=True))
    op.drop_table('user_logins')
    # ### end Alembic commands ###
