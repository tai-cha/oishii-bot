import Module from '../../module';
import { Note } from '../../misskey/note';
import { Bot } from '../../bot';
import API from '../../misskey/api';

export default class extends Module {
    Name = 'Unfollow';
    Regex = /^\/unfollow|フォロー解除$/i;

    Run(bot: Bot, note: Note): void {
        this.log(`${note.note.user.username} (${note.note.userId})`);
        void API.api('following/delete', {
            userId: note.note.userId,
        });
    }
}
