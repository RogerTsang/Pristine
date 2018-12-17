from datetime import datetime
from flask import render_template, Response, g, redirect, jsonify, request
from project import app, db
from project.models import UserModel
from .wrappers import login_required


@app.route('/')
def home():
    skipPersonalPage = request.cookies.get('skipPersonalPage')
    try:
        isSkipEnable = bool(int(skipPersonalPage))
    except ValueError:
        isSkipEnable = False
        response.cookie['skipPersonalPage'] = '0'

    if isSkipEnable:
        return redirect('/articles', code=302)
    return render_template('index.html')

@app.route('/articles')
@app.route('/account')
@app.route('/tag')
@app.route('/roadmap')
def logout_view():
    return render_template('index.html')


@app.route('/compose')
@app.route('/logout')
@login_required
def login_view():
    return render_template('index.html')


@app.route('/robots.txt')
def robots_txt_view():
    return Response('User-agent: *\nDisallow: /\n')


@app.before_request
def before_request():
    token = request.cookies.get('token')
    if token is not None:
        user = db.session.query(
            UserModel
        ).filter(
            UserModel.token == token
        ).first()
    else:
        user = None
    g.user = user


@app.context_processor
def context_user():
    if g.user:
        return dict(user={
            'id': g.user.id,
            'username': g.user.username,
            'login_date': g.user.login_date,
            'login_expiry': g.user.login_expiry,
        })
    return dict(user=None)