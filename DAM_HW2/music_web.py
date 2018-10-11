# -*- coding: utf-8 -*-
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/music_singer')
def music_singer():
    return render_template('music_singer.html')


@app.route('/music_play/<name>/<singer_id>')
def music_play(name, singer_id):
    return render_template('music_play.html', name=name, singer_id=singer_id)


if __name__ == '__main__':
    # 不用重新启动，只需要刷新页面即可
    app.run(debug=True)
